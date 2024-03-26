package com.backend.seniorcare.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.seniorcare.Model.Availableservices;

import com.backend.seniorcare.Repository.AvailableservicesRepository;

import io.micrometer.common.lang.NonNull;

@Service
public class AvailableservicesService {
    @Autowired
    private AvailableservicesRepository availableservicesRepository;

    public List<Availableservices> getAllServices()
    {
        return availableservicesRepository.findAll();
    }


    public Optional<Availableservices> getServiceById(@NonNull Integer serviceId)
    {
        return availableservicesRepository.findById(serviceId);
    }

    public Availableservices createService(Availableservices availableservices)
    {
        return availableservicesRepository.save(availableservices);
    }

    public Availableservices updateService(Integer id, Availableservices updatedService)
    {
        return availableservicesRepository.findById(id)
                .map(oldService -> {
                    oldService.setName(updatedService.getName());
                    oldService.setCost(updatedService.getCost());
                    oldService.setDescription(updatedService.getDescription());
                    return availableservicesRepository.save(oldService);
                })
                .orElseThrow(() -> new RuntimeException("Service not found with this id: " + id));
    }

    public void deleteAllServices()
    {
        availableservicesRepository.deleteAll();
    }

    public void deleteService(Integer serviceId)
    {
        if(availableservicesRepository.existsById(serviceId))
            availableservicesRepository.deleteById(serviceId);
    }
}
