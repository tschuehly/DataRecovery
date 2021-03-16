package de.tschuehly.datarecoverybackend.security

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component
import java.time.Duration

@Component
@ConfigurationProperties(prefix = "datarecovery.security")
class SecurityProperties {

    val passwordStrength = 10
    val tokenSecret = "productservice-secret"
    val tokenIssuer = "productservice-api"
    val tokenExpiration = Duration.ofHours(4)
}
