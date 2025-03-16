# SPSS Output & Report Writing

## SPSS Workflow

### Compute Difference Scores

#### Steps
`Transform > Compute Variable`.

Create a new variable (e.g., `DIFF = PostTest - PreTest`).

#### Purpose
Directly analyze the paired differences.

### Run Paired t-Test

#### Steps
`Analyze > Compare Means > Paired-Samples T Test`.

Select paired variables (e.g., `Before_Training` and `After_Training`).

#### Output Includes
Paired Samples Statistics: Means, SDs, and SE for both conditions.

Paired Samples Correlations: Relationship between paired scores (optional).

Paired Samples Test: Mean difference, t-value, p-value, 95% CI.

---

## Interpreting SPSS Output

### Paired Samples Statistics
Before: $M_1$, $SD_1$, $SE_1$.

After: $M_2$, $SD_2$, $SE_2$.

#### Example
Pre-training: $M=5.67$, $SD=1.23$.

Post-training: $M=7.20$, $SD=1.32$.

### Paired Samples Test
Mean Difference: $M_D=M_2-M_1$.

Std. Deviation: $SD_D$ of difference scores.

Std. Error Mean: $SE=\frac{SD_D}{\sqrt{n}}$.

95% CI: Range for population mean difference.

t-value: $t=\frac{M_D}{SE}$.

Sig. (2-tailed): p-value (e.g., $p=.017$).

---

## Report Structure

### Introduction
State hypothesis (e.g., *"Memory training improves license plate recall"*).

### Sample Findings
Report descriptive statistics for both conditions and differences:

*"Before training: $M=5.67$, $SD=1.23$; After training: $M=7.20$, $SD=1.32$.

Mean improvement: $M_D=1.53$, $SD_D=2.20$."*

### Results

#### APA Format
*"A paired samples t-test showed a significant increase in recall scores after training, $t(14)=2.70$, $p=.017$, 95% CI [0.32, 2.75]."*

#### Non-Significant Example
*"The difference was not significant, $t(11)=0.62$, $p=.548$, 95% CI [-4.17, 2.34]."*

### Conclusion
Link results to hypothesis (e.g., *"Training significantly improved recall"*).

For non-significant results: *"Insufficient evidence to suggest a difference."*

---

## Examples from Lecture

### Police Memory Training
Key Result: $t(14)=2.70$, $p=.017$.

Interpretation: *"Officers remembered 0.32 to 2.75 more plates post-training."*

### Boys’ Self-Estimated vs. Actual Height
Non-Significant: $t(11)=0.62$, $p=.548$.

Conclusion: *"No evidence boys misestimate height."*

### Girls’ Self-Estimated vs. Actual Height
Significant: $t(11)=6.12$, $p<.001$.

Conclusion: *"Girls underestimated height by 0.63–1.33 cm."*

### Happiness Living Alone vs. Family
Large Effect: $t(238)=40.63$, $p<.001$.

Interpretation: *"Happiness 0.57–0.62 units higher with family."*

---

## Key Tips for Reporting

### Check Assumptions
Use histograms/Q-Q plots or Shapiro-Wilk test for normality of differences.

Mention robustness for large samples ($n>30$).

### Avoid Pitfalls
Never confuse paired and independent t-tests.

Always report 95% CI alongside p-values.

### Visual Aids
Include boxplots or line charts to show paired differences (e.g., pre/post scores).

---

## APA Formatting Guidelines

### t-Test Syntax
*"A paired samples t-test revealed a significant difference between pre-test ($M=X$, $SD=Y$) and post-test ($M=X$, $SD=Y$), $t(df)=t$-value, $p=p$-value, 95% CI [LL, UL]."*

### Decimal Precision
Report p-values to 3 decimals (e.g., $p=.017$), unless $p<.001$.
