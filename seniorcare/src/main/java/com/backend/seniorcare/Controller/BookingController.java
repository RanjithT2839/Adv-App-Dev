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

import com.backend.seniorcare.Model.Booking;
import com.backend.seniorcare.Service.BookingService;

import org.springframework.http.HttpStatus;

@RestController 
@RequestMapping("/api/booking")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @GetMapping("/getBooking/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<?> getBookingById(@PathVariable Integer bookingId)
    {
        Optional<Booking> booking = bookingService.getBookingById(bookingId);
        return booking.map(item -> new ResponseEntity<>(item, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/getAllBookings")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> getBookings()
    {
        List<Booking> bookings = bookingService.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @PostMapping("/createBooking")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<?> createService(@NonNull @RequestBody Booking bookings)
    {
        Booking newBooking = bookingService.createBooking(bookings);
        return new ResponseEntity<>(newBooking, HttpStatus.CREATED);
    }

    @PutMapping("/updateBooking/{bookingId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Booking> updateBooking(@NonNull @PathVariable Integer bookngId,
            @RequestBody Booking updatedBooking)
    {
        Booking newBooking = bookingService.updateBooking(bookngId, updatedBooking);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/deleteBooking/{bookingId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteBooking(@NonNull @PathVariable Integer bookingId)
    {
        bookingService.deleteBooking(bookingId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/deleteBookings")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> delete()
    {
        bookingService.deleteAllBookings();;
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
