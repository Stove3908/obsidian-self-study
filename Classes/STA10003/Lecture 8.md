


### **Paired Samples t-Test**

	#### **Definition & Purpose**

- Tests **mean differences** between two related conditions.
- Used for **dependent samples** (same participants or matched pairs).
- Focuses on **difference scores** (e.g., post-test − pre-test).
- More sensitive than independent t-test (controls for individual differences).

---

#### **Research Designs**

- **Repeated Measures**:
    - Same participants measured twice (e.g., before/after intervention).
    - Example: Police officers’ license plate recall before vs. after training.
- **Matched Pairs**:
    - Different participants matched on key variables (e.g., age, IQ).
    - Example: Twins assigned to different treatment groups.

---

#### **Hypotheses**

- **Null Hypothesis ($H_0$​)**:
    - $\mu_D = 0$ (no population mean difference).
    - Verbal: _"No difference between conditions."_
- **Alternative Hypothesis ($H_1$​)**:
    - Non-directional: $μ_D\neq0$ (two-tailed test).
    - Directional: $\mu_D>0$ or $\mu_D<0$ (one-tailed test).
    - Example: _"Memory training increases license plate recall ($\mu_D>0$)."_

---

#### **Assumptions**

- **Independence**:
    - Observations in each condition are independent (no carryover effects).
- **Normality**:
    - Difference scores ($D$) are approximately normally distributed.
    - Check via histogram, Q-Q plot, or Shapiro-Wilk test (SPSS).
    - Robust for large samples ($>30$) despite skew.

---

#### **Calculation Steps**

- **Compute Difference Scores**:
    - $$D = X_{\text{After}} - X_{\text{Before}}$$
- **Mean Difference ($M_D$​)**:
    - $$M_D = \frac{\sum D}{n}$$
- **Variance ($s_D^2$​) & Standard Deviation ($s_D$​)**:
    - $$s_D^2 = \frac{\sum (D - MD)^2}{n - 1}$$
    - $$s_D = \sqrt{s_D^2}$$
- **Standard Error ($S_E$)**:
    - $S_{E} = \frac{s_D}{\sqrt{n}}$
- **t-Statistic**:
    - t=MD−0SEt = \frac{M_D - 0}{SE}t=SEMD​−0​.
- **Degrees of Freedom**:
    - df=n−1df = n - 1df=n−1.
- **Critical Value**:
    - Use t-table (e.g., tcrit=2.145t_{crit} = 2.145tcrit​=2.145 for df=14df=14df=14, α=.05\alpha=.05α=.05).

---

#### **Example: Police Memory Training**

	- **Data**:
	    - n=15n = 15n=15, MBefore=5.67M_{\text{Before}} = 5.67MBefore​=5.67, MAfter=7.20M_{\text{After}} = 7.20MAfter​=7.20.
	    - MD=1.53M_D = 1.53MD​=1.53, sD=2.20s_D = 2.20sD​=2.20, SE=0.568SE = 0.568SE=0.568.
	- **t-Value**:
	    - t(14)=1.530.568=2.699t(14) = \frac{1.53}{0.568} = 2.699t(14)=0.5681.53​=2.699.
	- **Decision**:
	    - t=2.699>tcrit=2.145t = 2.699 > t_{crit} = 2.145t=2.699>tcrit​=2.145 → Reject H0H_0H0​.
	- **95% Confidence Interval**:
	    - MD±tcrit×SE=1.53±2.145×0.568M_D \pm t_{crit} \times SE = 1.53 \pm 2.145 \times 0.568MD​±tcrit​×SE=1.53±2.145×0.568.
	    - [0.32,2.75][0.32, 2.75][0.32,2.75] (does not include 0 → significant).
	- **Conclusion**:
	    - Training significantly improved recall (p=.017p = .017p=.017).

---

#### **Key Formulas**

- t=MDSEt = \frac{M_D}{SE}t=SEMD​​.
- SE=sDnSE = \frac{s_D}{\sqrt{n}}SE=n​sD​​.
- CI=MD±(tcrit×SE)CI = M_D \pm (t_{crit} \times SE)CI=MD​±(tcrit​×SE).

---

This expanded branch provides a comprehensive breakdown of the paired t-test, integrating theoretical concepts, calculation mechanics, and practical examples from the lecture. 🧮🔍