


<center>### **Paired Samples t-Test**</center>

	#### **Definition & Purpose**
<center></center>
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
    - $$    D = X_{\text{After}} - X_{\text{Before}}$$
- **Mean Difference ($M_D$​)**:
    - $$    M_D = \frac{\sum D}{n}$$
- Variance ($s_D^2)$ & Standard Deviation ($s_D$)
    - $$s_D^2 = \frac{\sum (D - MD)^2}{n - 1}$$
    - $$s_D = \sqrt{s_D^2}$$
- **Standard Error ($S_E$)**:
    - $S_{E} = \frac{s_D}{\sqrt{n}}$
- **t-Statistic**:
    - $$t = \frac{M_D - 0}{SE}$$
- **Degrees of Freedom**:
	    - $$df = n - 1$$
- **Critical Value**:
    - Use t-table (e.g., $t_{\text{crit}} = 2.145$ for $df = 14$, $\alpha = .05$).
---

#### **Example: Police Memory Training**

- **Data**:
	- $n = 15$, $M_{\text{Before}} = 5.67$, $M_{\text{After}} = 7.20$.
	- $M_D = 1.53$, $s_D = 2.20$, $S_{E} = 0.568$.
- **t-Value**:
	- $$t(14) = \frac{1.53}{0.568} = 2.699$$
- **Decision**:
	- $$t = 2.699 > t_{\text{crit}} = 2.145 \rightarrow \text{Reject } H_0$$
- **95% Confidence Interval**:
	- $$M_D \pm t_{\text{crit}} \times SE = 1.53 \pm 2.145 \times 0.568$$
	- $$[0.32, 2.75] \quad (\text{does not include 0} \rightarrow \text{significant})$$
- **Conclusion**:
	- Training significantly improved recall ($p = .017$).

---

#### **Key Formulas**

- $$t = \frac{M_D}{S_{E}}$$
- $$S_{E} = \frac{s_D}{\sqrt{n}}$$
- $$CI = M_D \pm (t_{\text{crit}} \times S_{E})$$
---

This expanded branch provides a comprehensive breakdown of the paired t-test, integrating theoretical concepts, calculation mechanics, and practical examples from the lecture. 🧮🔍