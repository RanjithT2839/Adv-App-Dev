package com.backend.seniorcare.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.seniorcare.Model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    
}
