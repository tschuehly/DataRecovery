package de.tschuehly.datarecoverybackend.helpers

import de.tschuehly.datarecoverybackend.model.BaseEntity
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.findByIdOrNull

open class CrudService<T : BaseEntity, R : JpaRepository<T, Long>>(
    @Autowired protected var repository: R
) {

    fun getAll(): List<T> = repository.findAll()

    fun getById(id: Long): T = repository.findByIdOrNull(id)
        ?: throw NoSuchElementException("Could not find entity with matching id")

    fun save(dataObject: T): T = repository.save(dataObject)

    fun update(dataObject: T): T {
        dataObject.id ?.let {
            repository.findByIdOrNull(dataObject.id)
                ?.let { return repository.save(dataObject) }
                ?: throw NoSuchElementException("No entity found with matching id")
        } ?: throw IllegalArgumentException("No Id given")
    }

    fun deleteById(id: Long) {
        repository.findByIdOrNull(id)
            ?.let { repository.deleteById(id) }
            ?: throw NoSuchElementException("No entity found with matching id")
    }
}
