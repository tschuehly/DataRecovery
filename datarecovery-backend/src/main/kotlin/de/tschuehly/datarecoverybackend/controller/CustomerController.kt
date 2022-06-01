package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.helpers.CrudController
import de.tschuehly.datarecoverybackend.model.Customer
import de.tschuehly.datarecoverybackend.repository.CustomerRepository
import de.tschuehly.datarecoverybackend.service.CustomerService
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@PreAuthorize("hasRole('ADMIN')")
@RestController
@RequestMapping("api/customer")
class CustomerController(customerService: CustomerService) :
    CrudController<Customer, CustomerRepository, CustomerService>(customerService)
