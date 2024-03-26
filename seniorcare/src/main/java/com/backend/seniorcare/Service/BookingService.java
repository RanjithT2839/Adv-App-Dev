package com.backend.seniorcare.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.seniorcare.Model.Booking;
import com.backend.seniorcare.Repository.BookingRepository;

import io.micrometer.common.lang.NonNull;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;
    
    public List<Booking> getAllBookings()
    {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getBookingById(@NonNull Integer bookingId)
    {
        return bookingRepository.findById(bookingId);
    }

    public Booking createBooking(Booking booking)
    {
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Integer bookingId, Booking updatedBooking)
    {
        return bookingRepository.findById(bookingId)
                .map(oldBooking -> {
                    oldBooking.setBookingDate(updatedBooking.getBookingDate());
                    oldBooking.setBookingStatus(updatedBooking.getBookingStatus());
                    oldBooking.setDescription(updatedBooking.getDescription());
                    return bookingRepository.save(oldBooking);
                })
                .orElseThrow(() -> new RuntimeException("Booking not found with this id: " + bookingId));
    }

    public void deleteAllBookings()
    {
        bookingRepository.deleteAll();
    }

    public void deleteBooking(Integer bookingId)
    {
        if(bookingRepository.existsById(bookingId))
            bookingRepository.deleteById(bookingId);
    }
}
