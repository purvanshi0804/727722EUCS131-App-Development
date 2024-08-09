package com.example.agriback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.agriback.model.LoanApplication;
import com.example.agriback.repositary.LoanApplicationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LoanApplicationService {

    @Autowired
    private LoanApplicationRepository repository;

    public LoanApplication save(LoanApplication loanApplication) {
        return repository.save(loanApplication);
    }

    public Optional<LoanApplication> findById(Long id) {
        return repository.findById(id);
    }

    public List<LoanApplication> findAll() {
        return repository.findAll();
    }

    public LoanApplication update(Long id, LoanApplication updatedLoanApplication) {
        Optional<LoanApplication> existingLoanApplication = repository.findById(id);
        if (existingLoanApplication.isPresent()) {
            LoanApplication loanApplication = existingLoanApplication.get();
            loanApplication.setFullName(updatedLoanApplication.getFullName());
            loanApplication.setDob(updatedLoanApplication.getDob());
            loanApplication.setEmail(updatedLoanApplication.getEmail());
            loanApplication.setMobileNumber(updatedLoanApplication.getMobileNumber());
            loanApplication.setGender(updatedLoanApplication.getGender());
            loanApplication.setOccupation(updatedLoanApplication.getOccupation());
            loanApplication.setIdType(updatedLoanApplication.getIdType());
            loanApplication.setIdNumber(updatedLoanApplication.getIdNumber());
            loanApplication.setTypeOfLoan(updatedLoanApplication.getTypeOfLoan());
            loanApplication.setPurposeOfLoan(updatedLoanApplication.getPurposeOfLoan());
            loanApplication.setResidentialAddress(updatedLoanApplication.getResidentialAddress());
            loanApplication.setPermanentAddress(updatedLoanApplication.getPermanentAddress());
            loanApplication.setState(updatedLoanApplication.getState());
            loanApplication.setDistrict(updatedLoanApplication.getDistrict());
            loanApplication.setBlockNumber(updatedLoanApplication.getBlockNumber());
            loanApplication.setWardNumber(updatedLoanApplication.getWardNumber());
            loanApplication.setLoanAmount(updatedLoanApplication.getLoanAmount());
            loanApplication.setTypeOfCollateral(updatedLoanApplication.getTypeOfCollateral());
            loanApplication.setCollateralValue(updatedLoanApplication.getCollateralValue());
            loanApplication.setSpouseName(updatedLoanApplication.getSpouseName());
            loanApplication.setNumberOfSiblings(updatedLoanApplication.getNumberOfSiblings());
            // loanApplication.setUploadIdProof(updatedLoanApplication.getUploadIdProof());
            // loanApplication.setUploadPhoto(updatedLoanApplication.getUploadPhoto());
            // loanApplication.setUploadCollateralProof(updatedLoanApplication.getUploadCollateralProof());

            return repository.save(loanApplication);
        } else {
            return null;
        }
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public List<LoanApplication> findByPurposeOfLoan(String purpose) {
        return repository.findAll().stream()
                         .filter(app -> purpose.equals(app.getPurposeOfLoan()))
                         .toList();
    }
}
