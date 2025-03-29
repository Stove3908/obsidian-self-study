
### **2. SPSS Output & Report Writing**

#### **SPSS Workflow**

1. **Compute Difference Scores**:
    - **Steps**:
        - `Transform > Compute Variable`.
        - Create a new variable (e.g., `DIFF = PostTest - PreTest`).
    - **Purpose**: Directly analyze the paired differences.
2. **Run Paired t-Test**:
    - **Steps**:
        - `Analyze > Compare Means > Paired-Samples T Test`.
        - Select paired variables (e.g., `Before_Training` and `After_Training`).
    - **Output Includes**:
        - **Paired Samples Statistics**: Means, SDs, and SE for both conditions.
        - **Paired Samples Correlations**: Relationship between paired scores (optional).
        - **Paired Samples Test**: Mean difference, t-value, p-value, 95% CI.

---

#### **Interpreting SPSS Output**

1. **Paired Samples Statistics**:
    - **Before**: M1M_1M1​, SD1SD_1SD1​, SE1SE_1SE1​.
    - **After**: M2M_2M2​, SD2SD_2SD2​, SE2SE_2SE2​.
    - Example:
        - *Pre-training: M=5.67M = 5.67M=5.67, SD=1.23SD = 1.23SD=1.23.
        - Post-training: M=7.20M = 7.20M=7.20, SD=1.32SD = 1.32SD=1.32.*
2. **Paired Samples Test**:
    - **Mean Difference**: MD=M2−M1M_D = M_2 - M_1MD​=M2​−M1​.
    - **Std. Deviation**: SDDSD_DSDD​ of difference scores.
    - **Std. Error Mean**: SE=SDDnSE = \frac{SD_D}{\sqrt{n}}SE=n​SDD​​.
    - **95% CI**: Range for population mean difference.
    - **t-value**: t=MDSEt = \frac{M_D}{SE}t=SEMD​​.
    - **Sig. (2-tailed)**: p-value (e.g., p=.017p = .017p=.017).

---

#### **Report Structure**

1. **Introduction**:
    - State hypothesis (e.g., _"Memory training improves license plate recall"_).
2. **Sample Findings**:
    - Report descriptive statistics for both conditions and differences:
        - _"Before training: M=5.67M = 5.67M=5.67, SD=1.23SD = 1.23SD=1.23; After training: M=7.20M = 7.20M=7.20, SD=1.32SD = 1.32SD=1.32. Mean improvement: MD=1.53M_D = 1.53MD​=1.53, SDD=2.20SD_D = 2.20SDD​=2.20."_
3. **Results**:
    - **APA Format**:
        - _"A paired samples t-test showed a significant increase in recall scores after training, t(14)=2.70t(14) = 2.70t(14)=2.70, p=.017p = .017p=.017, 95% CI [0.32, 2.75]."_
    - **Non-Significant Example**:
        - _"The difference was not significant, t(11)=0.62t(11) = 0.62t(11)=0.62, p=.548p = .548p=.548, 95% CI [-4.17, 2.34]."_
4. **Conclusion**:
    - Link results to hypothesis (e.g., _"Training significantly improved recall"_).
    - For non-significant results: _"Insufficient evidence to suggest a difference."_

---

#### **Examples from Lecture**

1. **Police Memory Training**:
    - **Key Result**: t(14)=2.70t(14) = 2.70t(14)=2.70, p=.017p = .017p=.017.
    - **Interpretation**: _"Officers remembered 0.32 to 2.75 more plates post-training."_
2. **Boys’ Self-Estimated vs. Actual Height**:
    - **Non-Significant**: t(11)=0.62t(11) = 0.62t(11)=0.62, p=.548p = .548p=.548.
    - **Conclusion**: _"No evidence boys misestimate height."_
3. **Girls’ Self-Estimated vs. Actual Height**:
    - **Significant**: t(11)=6.12t(11) = 6.12t(11)=6.12, p<.001p < .001p<.001.
    - **Conclusion**: _"Girls underestimated height by 0.63–1.33 cm."_
4. **Happiness Living Alone vs. Family**:
    - **Large Effect**: t(238)=40.63t(238) = 40.63t(238)=40.63, p<.001p < .001p<.001.
    - **Interpretation**: _"Happiness 0.57–0.62 units higher with family."_

---

#### **Key Tips for Reporting**

- **Check Assumptions**:
    - Use histograms/Q-Q plots or Shapiro-Wilk test for normality of differences.
    - Mention robustness for large samples (n>30n > 30n>30).
- **Avoid Pitfalls**:
    - Never confuse paired and independent t-tests.
    - Always report 95% CI alongside p-values.
- **Visual Aids**:
    - Include boxplots or line charts to show paired differences (e.g., pre/post scores).

---

#### **APA Formatting Guidelines**

- **t-Test Syntax**:
    - _"A paired samples t-test revealed a significant difference between pre-test (M=XM = XM=X, SD=YSD = YSD=Y) and post-test (M=XM = XM=X, SD=YSD = YSD=Y), t(df)=tt(df) = tt(df)=t-value, p=pp = pp=p-value, 95% CI [LL, UL]."_
- **Decimal Precision**:
    - Report p-values to 3 decimals (e.g., p=.017p = .017p=.017), unless p<.001p < .001p<.001.

---

This expanded branch equips students to navigate SPSS outputs, structure reports, and interpret results accurately, aligning with examples and guidelines from the lecture. 📊📝