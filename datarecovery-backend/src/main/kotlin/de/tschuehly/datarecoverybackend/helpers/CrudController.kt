package de.tschuehly.datarecoverybackend.helpers

import de.tschuehly.datarecoverybackend.model.BaseEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.web.server.ResponseStatusException
import  org.slf4j.Logger
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

open class CrudController<T : BaseEntity, R : JpaRepository<T, Long>, S : CrudService<T, R>>(
    private val service: S,
    private val logger: Logger
) {

    @GetMapping("")
    fun getAll(): List<T> {
        return service.getAll()
    }

    @GetMapping("/{id}")
    fun getById(@PathVariable id: Long): T {
        try {
            return service.getById(id)
        } catch (e: NoSuchElementException) {
            logger.error(e.toString())
            throw ResponseStatusException(
                HttpStatus.NOT_FOUND,
                e.localizedMessage
            )
        }
    }

    @PostMapping("")
    fun create(@RequestBody dataObject: T): T {
        try {
            return service.save(dataObject)
        } catch (e: IllegalArgumentException) {
            logger.error(e.toString())
            throw ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                e.localizedMessage
            )
        }
    }

    @PutMapping("")
    fun update(@RequestBody dataObject: T): T {
        try {
            return service.update(dataObject)
        } catch (e: NoSuchElementException) {
            logger.error(e.toString())
            throw ResponseStatusException(
                HttpStatus.NOT_FOUND,
                e.localizedMessage
            )
        } catch (e: IllegalArgumentException) {
            logger.error(e.toString())
            throw ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                e.localizedMessage
            )
        }
    }

    @DeleteMapping("/{id}")
    fun deleteById(@PathVariable id: Long) {
        try {
            return service.deleteById(id)
        } catch (e: NoSuchElementException) {
            logger.error(e.toString())
            throw ResponseStatusException(
                HttpStatus.NOT_FOUND,
                e.localizedMessage
            )
        }
    }
}
