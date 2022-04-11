package de.tschuehly.datarecoverybackend.controller

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.node.ObjectNode
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import de.tschuehly.datarecoverybackend.helpers.CrudController
import de.tschuehly.datarecoverybackend.model.KeywordRank
import de.tschuehly.datarecoverybackend.repository.KeywordRankRepository
import de.tschuehly.datarecoverybackend.service.CustomerService
import de.tschuehly.datarecoverybackend.service.KeywordRankService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate
import org.springframework.web.server.ResponseStatusException
import java.net.URLEncoder

@RestController
@RequestMapping("api/keyword-rank")
class KeywordRankController(keywordRankService: KeywordRankService) :
    CrudController<KeywordRank, KeywordRankRepository, KeywordRankService>(keywordRankService)
