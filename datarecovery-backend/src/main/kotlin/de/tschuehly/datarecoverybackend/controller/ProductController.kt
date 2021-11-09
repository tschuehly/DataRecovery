package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.helpers.CrudController
import de.tschuehly.datarecoverybackend.model.Product
import de.tschuehly.datarecoverybackend.repository.ProductRepository
import de.tschuehly.datarecoverybackend.service.ProductService
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/product")
class ProductController(productService: ProductService) :
    CrudController<Product, ProductRepository, ProductService>(productService)
