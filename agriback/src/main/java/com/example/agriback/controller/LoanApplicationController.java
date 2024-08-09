package com.example.agriback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.agriback.model.LoanApplication;
import com.example.agriback.service.LoanApplicationService;

import java.util.List;
import java.util.Optional;

@RestController
// @RequestMapping("/api/loan-applications")
public class LoanApplicationController {

    @Autowired
    private LoanApplicationService service;

    @PostMapping("/apply")
    public ResponseEntity<LoanApplication> createLoanApplication(@RequestBody LoanApplication loanApplication
     ) {

        try {

            LoanApplication savedApplication = service.save(loanApplication);
            return new ResponseEntity<>(savedApplication, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanApplication> getLoanApplicationById(@PathVariable Long id) {
        Optional<LoanApplication> loanApplication = service.findById(id);
        return loanApplication.map(ResponseEntity::ok)
                              .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/gett")
    public ResponseEntity<List<LoanApplication>> getAllLoanApplications() {
        List<LoanApplication> loanApplications = service.findAll();
        return ResponseEntity.ok(loanApplications);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LoanApplication> updateLoanApplication(
            @PathVariable Long id,
            @RequestParam String fullName,
            @RequestParam String dob,
            @RequestParam String email,
            @RequestParam String mobileNumber,
            @RequestParam String gender,
            @RequestParam String occupation,
            @RequestParam String idType,
            @RequestParam String idNumber,
            @RequestParam String typeOfLoan,
            @RequestParam String purposeOfLoan,
            @RequestParam String residentialAddress,
            @RequestParam String permanentAddress,
            @RequestParam String state,
            @RequestParam String district,
            @RequestParam String blockNumber,
            @RequestParam String wardNumber,
            @RequestParam double loanAmount,
            @RequestParam String typeOfCollateral,
            @RequestParam double collateralValue,
            @RequestParam(required = false) String spouseName,
            @RequestParam int numberOfSiblings,
            @RequestParam(required = false) MultipartFile uploadIdProof,
            @RequestParam(required = false) MultipartFile uploadPhoto,
            @RequestParam(required = false) MultipartFile uploadCollateralProof) {

        try {
            LoanApplication updatedLoanApplication = new LoanApplication();
            updatedLoanApplication.setFullName(fullName);
            updatedLoanApplication.setDob(dob);
            updatedLoanApplication.setEmail(email);
            updatedLoanApplication.setMobileNumber(mobileNumber);
            updatedLoanApplication.setGender(gender);
            updatedLoanApplication.setOccupation(occupation);
            updatedLoanApplication.setIdType(idType);
            updatedLoanApplication.setIdNumber(idNumber);
            updatedLoanApplication.setTypeOfLoan(typeOfLoan);
            updatedLoanApplication.setPurposeOfLoan(purposeOfLoan);
            updatedLoanApplication.setResidentialAddress(residentialAddress);
            updatedLoanApplication.setPermanentAddress(permanentAddress);
            updatedLoanApplication.setState(state);
            updatedLoanApplication.setDistrict(district);
            updatedLoanApplication.setBlockNumber(blockNumber);
            updatedLoanApplication.setWardNumber(wardNumber);
            updatedLoanApplication.setLoanAmount(loanAmount);
            updatedLoanApplication.setTypeOfCollateral(typeOfCollateral);
            updatedLoanApplication.setCollateralValue(collateralValue);
            updatedLoanApplication.setSpouseName(spouseName);
            updatedLoanApplication.setNumberOfSiblings(numberOfSiblings);
            // if (uploadIdProof != null) {
            //     updatedLoanApplication.setUploadIdProof(uploadIdProof.getBytes());
            // }
            // if (uploadPhoto != null) {
            //     updatedLoanApplication.setUploadPhoto(uploadPhoto.getBytes());
            // }
            // if (uploadCollateralProof != null) {
            //     updatedLoanApplication.setUploadCollateralProof(uploadCollateralProof.getBytes());
            // }

            LoanApplication loanApplication = service.update(id, updatedLoanApplication);
            return loanApplication != null ? ResponseEntity.ok(loanApplication) 
                                           : new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoanApplication(@PathVariable Long id) {
        service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
