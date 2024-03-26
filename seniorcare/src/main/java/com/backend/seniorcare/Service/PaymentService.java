package com.backend.seniorcare.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.seniorcare.Model.Payment;
import com.backend.seniorcare.Repository.PaymentRepository;

import io.micrometer.common.lang.NonNull;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getAllPayments()
    {
        return paymentRepository.findAll();
    }

    public Optional<Payment> getPaymentById(@NonNull Integer bookingId)
    {
        return paymentRepository.findById(bookingId);
    }

    public Payment craetePayment(Payment payment)
    {
        return paymentRepository.save(payment);
    }

    public Payment updatePayment(Integer paymentId, Payment updatedPayment)
    {
        return paymentRepository.findById(paymentId)
                .map(oldPayment -> {
                    oldPayment.setAmount(updatedPayment.getAmount());
                    oldPayment.setModeOfPayment(updatedPayment.getModeOfPayment());
                    oldPayment.setPaymentDate(updatedPayment.getPaymentDate());
                    oldPayment.setStatus(updatedPayment.getStatus());
                    return paymentRepository.save(oldPayment);
                })
                .orElseThrow(() -> new RuntimeException("Payment not found with this id: " + paymentId));
    }

    public void deleteAllPayments()
    {
        paymentRepository.deleteAll();
    }

    public void deletePayment(Integer paymentId)
    {
        if(paymentRepository.existsById(paymentId))
            paymentRepository.deleteById(paymentId);
    }
}
