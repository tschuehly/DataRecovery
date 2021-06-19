package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.*
import org.hibernate.SessionFactory
import org.hibernate.envers.AuditReaderFactory
import org.hibernate.envers.query.AuditEntity
import org.springframework.beans.factory.annotation.Autowired
import java.util.*
import javax.annotation.PostConstruct
import javax.persistence.*

@PersistenceContext
val entityManager: EntityManager? = null;
@Autowired
val sessionFactory: SessionFactory? = null
@Entity
@Table(name="ORDER_TABLE")
@JsonIgnoreProperties(ignoreUnknown = true)
class Order(
    var trackingId: String? = UUID.randomUUID().toString(),
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    var orderDate: Date?,
    var trackingState: String?,
    var productId:Int?,
    var productRevision: Int?,
    @OneToOne
    var product: Product,
    @OneToOne(cascade = [CascadeType.ALL])
    var customer: Customer?,
    var replacement: String,
    @OneToMany(cascade = [CascadeType.ALL])
    var updates: MutableList<Update> = ArrayList()
) : BaseEntity() {
    override fun toString(): String {
        return "Order(trackingId=$trackingId, orderDate=$orderDate, trackingState=$trackingState, product=$product, customer=$customer, replacement='$replacement')"
    }

    fun addUpdateToOrder(update: Update) = updates.add(update)

    @PostLoad
    fun loadProduct() {
//        val auditReader = AuditReaderFactory.get(sessionFactory?.currentSession)
        val auditReader = AuditReaderFactory.get(entityManager)

        val query = auditReader.createQuery()
            .forEntitiesAtRevision(Product::class.java, product.id)
            .add(AuditEntity.id().eq(id))
        product = query.singleResult as Product
    }
}
