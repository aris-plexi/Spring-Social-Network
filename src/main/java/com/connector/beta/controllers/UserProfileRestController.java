package com.connector.beta.controllers;

import com.connector.beta.dto.UserDto;

import com.connector.beta.services.UserProfileServiceInterface;
import com.connector.beta.services.UserServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
//@CrossOrigin("*")
public class UserProfileRestController {

    private final UserServiceInterface userService;
    private final UserProfileServiceInterface imageService;

    @Autowired
    public UserProfileRestController(UserServiceInterface userService, UserProfileServiceInterface imageService) {
        this.userService = userService;
        this.imageService = imageService;
    }

    @GetMapping("/user")
    public ResponseEntity<UserDto> uploadImage(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(userService.getCurrentUser());
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> getUserProfiles(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(userService.getAllUsers());
    }

    @PostMapping(
            path = "/image/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadUserProfileImage(@RequestParam("file") MultipartFile file){

           Integer userid= userService.findUserIdByEmail(userService.findCurrentUsername());
            imageService.uploadUserProfileImage(userid,file);
    }

    @GetMapping("/image/download")
    public byte[] downloadUserProfileImage(){
        Integer userid= userService.findUserIdByEmail(userService.findCurrentUsername());

      return imageService.downloadUserProfileImage(userid);
    }

}