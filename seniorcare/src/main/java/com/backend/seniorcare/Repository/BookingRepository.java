package com.backend.seniorcare.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.seniorcare.Model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
    
}
