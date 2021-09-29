package de.tschuehly.datarecoverybackend.helpers

import de.tschuehly.datarecoverybackend.model.BaseEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.web.bind.annotation.*

open class CrudController<T : BaseEntity, R : JpaRepository<T, Long>, S : CrudService<T, R>>(
    val service: S
) {

    @GetMapping("")
    fun getAll(): List<T> = service.getAll()

    @GetMapping("/{id}")
    fun getById(@PathVariable id: Long): T = service.getById(id)

    @PostMapping("")
    fun create(@RequestBody dataObject: T): T = service.save(dataObject)

    @PutMapping("")
    fun update(@RequestBody dataObject: T): T = service.update(dataObject)

    @DeleteMapping("/{id}")
    fun deleteById(@PathVariable id: Long) = service.deleteById(id)
}
