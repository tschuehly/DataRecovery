package de.tschuehly.datarecoverybackend.service

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import de.tschuehly.datarecoverybackend.helpers.CrudService
import de.tschuehly.datarecoverybackend.model.Customer
import de.tschuehly.datarecoverybackend.model.KeywordRank
import de.tschuehly.datarecoverybackend.repository.CustomerRepository
import de.tschuehly.datarecoverybackend.repository.KeywordRankRepository
import org.slf4j.Logger
import org.springframework.http.HttpStatus
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import org.springframework.web.server.ResponseStatusException
import java.net.URLEncoder
import java.util.*
import java.util.concurrent.TimeUnit
import javax.annotation.PostConstruct

@Service
class KeywordRankService(
    val keywordRankRepository: KeywordRankRepository,
    private val logger: Logger
) :
    CrudService<KeywordRank, KeywordRankRepository>(keywordRankRepository) {
    @Scheduled(cron = "@daily", zone = "Europe/Paris")
    fun getRank() {
        keywords.forEach { keyword ->
            try {
                logger.info("Get Rank for keyword: $keyword")
                val rankResponse = RestTemplate().getForObject(
                    "https://seorch.de/php/tools/rankChecker.php?&kw=${
                        URLEncoder.encode(
                            keyword,
                            "utf-8"
                        )
                    }&lang=de&bot=bickdickmeetoo",
                    String::class.java
                )
                val keywordRanks = jacksonObjectMapper().readTree(rankResponse)
                    .get("results")
                val index =
                    keywordRanks.indexOfFirst { it.get("url").asText().contains("www.jungbauerdatenrettung.de") }
                if (index == -1) {
                    logger.info("Keyword: $keyword is not in top 100")
                } else {
                    logger.info("Keyword: $keyword has rank: ${index.plus(1)}")
                    logger.info(
                        KeywordRank(
                            keyword,
                            keywordRanks?.get(index)?.get("url")?.asText(),
                            index.plus(1),
                            Date()
                        ).toString()
                    )
                    keywordRankRepository.save(
                        KeywordRank(keyword, keywordRanks?.get(index)?.get("url")?.asText(), index.plus(1), Date())
                    )
                }
            } catch (e: Exception) {
                logger.error("Could not get rank for keyword: $keyword")
                logger.error(e.toString())
            }
            Thread.sleep(15000)
        }
    }

    companion object {
        val keywords = arrayListOf(
            "Datenretter",
            "Datenrettung Festplatte",
            "Datenrettung HDD",
            "Datenrettung",
            "Datenwiederherstellung",
            "Festplatte retten",
            "SSD Datenrettung",
            "USB-Stick Reparatur",
            "SD-Karte Reparatur",
            "Datenrettung Kosten",
            "Datenrettung Festplatte Kosten",
            "Festplatte Reparatur Kosten"
        )
    }
}
