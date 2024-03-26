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
import org.springframework.http.HttpStatus;

import com.backend.seniorcare.Model.Availableservices;
import com.backend.seniorcare.Service.AvailableservicesService;

@RestController
@RequestMapping("/api/availableServices")
public class AvailableservicesController {
    @Autowired
    private AvailableservicesService availableservicesService;

    @GetMapping("/getService/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> getServiceById(@PathVariable Integer serviceId)
    {
        Optional<Availableservices> availableServices = availableservicesService.getServiceById(serviceId);
        return availableServices.map(item -> new ResponseEntity<>(item, HttpStatus.OK))
                        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/getAllServices")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> getAllServices()
    {
        List<Availableservices> availableServices = availableservicesService.getAllServices();
        return new ResponseEntity<>(availableServices, HttpStatus.OK);
    }

    @PostMapping("/createService")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> createService(@NonNull @RequestBody Availableservices availableservices)
    {
        Availableservices newavailableservices = availableservicesService.createService(availableservices);
        return new ResponseEntity<>(newavailableservices, HttpStatus.CREATED);
    }

    @PutMapping("/updateService/{serviceId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Availableservices> updateService(@NonNull @PathVariable Integer serviceId, 
            @RequestBody Availableservices updatedServices)
    {
        Availableservices availableservices = availableservicesService.updateService(serviceId, updatedServices);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);        
    }

    @DeleteMapping("/deleteService/{serviceId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteService(@NonNull @PathVariable Integer serviceId)
    {
        availableservicesService.deleteService(serviceId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/deleteServices")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> delete()
    {
        availableservicesService.deleteAllServices();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
