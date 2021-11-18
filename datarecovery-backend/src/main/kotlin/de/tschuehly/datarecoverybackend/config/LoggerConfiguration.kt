package de.tschuehly.datarecoverybackend.config

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.InjectionPoint
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Scope

@Configuration
class LoggerConfiguration {
    @Bean
    @Scope("prototype")
    fun logger(injectionPoint: InjectionPoint): Logger {

        injectionPoint.field?.let {
            throw IllegalStateException("use constructor injection for logger in ${it.declaringClass}")
        }
        injectionPoint.methodParameter?.method?.let {
            throw IllegalStateException("use constructor injection for logger in ${it.declaringClass}")
        }
        return LoggerFactory.getLogger(
            injectionPoint.methodParameter?.containingClass!!
        )
    }
}
