package com.example.agriback.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoanApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String dob;
    private String email;
    private String mobileNumber;
    private String gender;
    private String occupation;
    private String idType;
    private String idNumber;
    private String typeOfLoan;
    private String purposeOfLoan;

    // @Lob
    // private byte[] uploadIdProof;

    // @Lob
    // private byte[] uploadPhoto;

    // @Lob
    // private byte[] uploadCollateralProof;

    
    private String state;
    private String district;
    private String blockNumber;
    private String wardNumber;
   
    private String spouseName;
    private int numberOfSiblings;
    private String residentialAddress;
    private String permanentAddress;
    private Double loanAmount;
    private String typeOfCollateral;
    private Double collateralValue;
    
}
