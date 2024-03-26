package com.backend.seniorcare.Controller;

import java.util.List;
import java.util.Optional;
import org.springframework.lang.NonNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.observation.ObservationProperties.Http;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.seniorcare.Model.Payment;
import com.backend.seniorcare.Service.PaymentService;

import org.springframework.http.HttpStatus;
@RestController
@RequestMapping("/api/payment")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @GetMapping("/getPayment/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<?> getPaymentById(@PathVariable Integer paymentId)
    {
        Optional<Payment> payment = paymentService.getPaymentById(paymentId);
        return payment.map(item -> new ResponseEntity<>(item, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/getAllPayment")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> getPayment()
    {
        List<Payment> payment = paymentService.getAllPayments();
        return new ResponseEntity<>(payment, HttpStatus.OK);
    }

    @PostMapping("/createPayment")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<?> createPayment(@NonNull @RequestBody Payment payment)
    {
        Payment newPayment = paymentService.craetePayment(payment);
        return new ResponseEntity<>(newPayment, HttpStatus.CREATED);
    }

    @PutMapping("/updatePayment/{paymentId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Payment> updatePayment(@NonNull @PathVariable Integer bookngId,
            @RequestBody Payment updatedPayment)
    {
        Payment newPayment = paymentService.updatePayment(bookngId, updatedPayment);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/deletePayment/{paymentId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deletePayment(@NonNull @PathVariable Integer paymentId)
    {
        paymentService.deletePayment(paymentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/deletePayments")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> delete()
    {
        paymentService.deleteAllPayments();;
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
