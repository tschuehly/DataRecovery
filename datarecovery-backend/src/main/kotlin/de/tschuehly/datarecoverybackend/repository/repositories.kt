package de.tschuehly.datarecoverybackend.repository

import de.tschuehly.datarecoverybackend.model.*
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface OrderRepository : JpaRepository<Order, Long> {
    fun findByTrackingIdAndCustomer_PostalCode(trackingId: String, postalCode: String): Order?
    fun findByTrackingStateInOrderByOrderDateDesc(trackingStateList: List<String>, pageable: Pageable): List<Order>
    fun findByTrackingStateNotIn(trackingStateList: List<String>): List<Order>
    fun countOrdersByTrackingStateIn(trackingStateList: List<String>): Number
    fun countOrdersByTrackingStateNotIn(trackingStateList: List<String>): Number

    @Suppress("JpaQlInspection")
    @Query(
        "select o from Order o " +
                "where (o.customer.firstName is null or upper(o.customer.firstName) like upper(concat('%', ?1, '%'))) " +
                "or (o.customer.lastName is null or upper(o.customer.lastName) like upper(concat('%', ?2, '%'))) " +
                "or (o.id is null or cast(o.id as java.lang.String) like concat('%', ?3, '%'))"
    )
    fun findBySearchTerm(
        customer_firstName: String,
        customer_lastName: String,
        id: String
    ): List<Order>
}

interface CustomerRepository : JpaRepository<Customer, Long>
interface PictureRepository : JpaRepository<Picture, Long>
interface CategoryRepository : JpaRepository<Category, Long>
interface ProductRepository : JpaRepository<Product, Long>
interface OrderProductRepository : JpaRepository<OrderProduct, Long>
interface ReviewRepository : JpaRepository<Review, Long>
interface UserRepository : JpaRepository<WebsiteUser?, Long?> {
    override fun findAll(): List<WebsiteUser?>
    fun findByUsername(name: String): WebsiteUser?
}
