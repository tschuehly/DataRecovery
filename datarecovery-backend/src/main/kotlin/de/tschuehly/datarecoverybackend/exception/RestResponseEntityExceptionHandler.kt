package de.tschuehly.datarecoverybackend.exception

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.method.HandlerMethod
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler
import java.util.*

@ControllerAdvice
class RestResponseEntityExceptionHandler(val logger: Logger): ResponseEntityExceptionHandler() {
    @ExceptionHandler(NoSuchElementException::class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    fun handleNoSuchElementException(ex: RuntimeException, handlerMethod: HandlerMethod): ResponseEntity<ErrorResponse> {
        LoggerFactory.getLogger(handlerMethod.method.declaringClass).error(ex.localizedMessage)
        return ResponseEntity(ErrorResponse(HttpStatus.NOT_FOUND, ex.localizedMessage), HttpStatus.NOT_FOUND)
    }
    @ExceptionHandler(IllegalArgumentException::class)
    fun handleIllegalArgumentException(ex: RuntimeException, handlerMethod: HandlerMethod): ResponseEntity<ErrorResponse> {
        LoggerFactory.getLogger(handlerMethod.method.declaringClass).error(ex.localizedMessage)
        return ResponseEntity(ErrorResponse(HttpStatus.BAD_REQUEST, ex.localizedMessage), HttpStatus.BAD_REQUEST)
    }
}

class ErrorResponse(val status: HttpStatus, val error: String) {
    val timestamp: Date = Date()
    val code: Number = status.value()
}
