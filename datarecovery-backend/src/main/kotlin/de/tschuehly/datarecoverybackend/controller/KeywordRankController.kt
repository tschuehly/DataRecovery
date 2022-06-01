package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.helpers.CrudController
import de.tschuehly.datarecoverybackend.model.KeywordRank
import de.tschuehly.datarecoverybackend.repository.KeywordRankRepository
import de.tschuehly.datarecoverybackend.service.KeywordRankService
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@PreAuthorize("hasRole('ADMIN')")
@RestController
@RequestMapping("api/keyword-rank")
class KeywordRankController(keywordRankService: KeywordRankService) :
    CrudController<KeywordRank, KeywordRankRepository, KeywordRankService>(keywordRankService)
