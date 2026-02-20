package com.myo.myanmarstore.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myo.myanmarstore.dto.ProductDto;
import com.myo.myanmarstore.service.ProductService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    // This is constructor Injection
    private final ProductService productService;

    @GetMapping
    public List<ProductDto> getProducts() throws InterruptedException {
        Thread.sleep(9000);
        List<ProductDto> productList = productService.getProducts();
        return productList;
    }
}
