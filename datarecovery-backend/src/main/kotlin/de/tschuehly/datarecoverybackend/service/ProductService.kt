package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.helpers.CrudService
import de.tschuehly.datarecoverybackend.model.Product
import de.tschuehly.datarecoverybackend.repository.ProductRepository
import org.springframework.stereotype.Service

@Service
class ProductService(productRepository: ProductRepository) :
    CrudService<Product, ProductRepository>(productRepository)
