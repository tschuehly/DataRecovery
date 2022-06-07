package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.helpers.CrudController
import de.tschuehly.datarecoverybackend.model.Category
import de.tschuehly.datarecoverybackend.repository.CategoryRepository
import de.tschuehly.datarecoverybackend.service.CategoryService
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@PreAuthorize("hasRole('ADMIN')")
@RestController
@RequestMapping("api/category")
class CategoryController(categoryService: CategoryService) :
    CrudController<Category, CategoryRepository, CategoryService>(categoryService)
