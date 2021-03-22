package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.helpers.CrudService
import de.tschuehly.datarecoverybackend.model.Category
import de.tschuehly.datarecoverybackend.model.Customer
import de.tschuehly.datarecoverybackend.repository.CategoryRepository
import de.tschuehly.datarecoverybackend.repository.CustomerRepository
import org.slf4j.Logger
import org.springframework.stereotype.Service

@Service
class CategoryService(
    private val categoryRepository: CategoryRepository,
    private val logger: Logger
) : CrudService<Category, CategoryRepository>(categoryRepository) {
}
