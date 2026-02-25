package com.myo.myanmarstore.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myo.myanmarstore.dto.ContactRequestDto;
import com.myo.myanmarstore.service.ContactService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/contacts")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public String saveContact(@RequestBody ContactRequestDto contactRequestDto) throws InterruptedException {
        // Thread.sleep(3000);
        boolean isSaved = contactService.saveContact(contactRequestDto);
        if (isSaved) {
            return "Request processed successfully";
        } else {
            return "An error occurred. Please try again or contact Dev team";
        }
    }

}