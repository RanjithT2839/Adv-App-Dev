package com.backend.seniorcare.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.seniorcare.Model.Availableservices;

public interface AvailableservicesRepository extends JpaRepository<Availableservices, Integer> {
}
