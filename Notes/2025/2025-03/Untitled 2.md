Sure! Here is the reformatted content with sequential headings starting from Heading 1:

# SPSS Output & Report Writing

## SPSS Workflow

### Compute Difference Scores

#### Steps

- `Transform > Compute Variable`.
- Create a new variable (e.g., `DIFF = PostTest - PreTest`).

#### Purpose

Directly analyze the paired differences.

### Run Paired t-Test

#### Steps

- `Analyze > Compare Means > Paired-Samples T Test`.
- Select paired variables (e.g., `Before_Training` and `After_Training`).

#### Output Includes

- **Paired Samples Statistics**: Means, SDs, and SE for both conditions.
- **Paired Samples Correlations**: Relationship between paired scores (optional).
- **Paired Samples Test**: Mean difference, t-value, p-value, 95% CI.

---

## Interpreting SPSS Output

### Paired Samples Statistics

- **Before**: ( M_1 ), ( SD_1 ), ( SE_1 ).
- **After**: ( M_2 ), ( SD_2 ), ( SE_2 ).

#### Example

- _Pre-training: ( M = 5.67 ), ( SD = 1.23 )._
- _Post-training: ( M = 7.20 ), ( SD = 1.32 )._

### Paired Samples Test

- **Mean Difference**: ( M_D = M_2 - M_1 ).
- **Std. Deviation**: ( SD_D ) of difference scores.
- **Std. Error Mean**: ( SE = \frac{SD_D}{\sqrt{n}} ).
- **95% CI**: Range for population mean difference.
- **t-value**: ( t = \frac{M_D}{SE} ).
- **Sig. (2-tailed)**: p-value (e.g., ( p = .017 )).

---

## Report Structure

### Introduction

State hypothesis (e.g., _"Memory training improves license plate recall"_).

### Sample Findings

Report descriptive statistics for both conditions and differences:

- _"Before training: ( M = 5.67 ), ( SD = 1.23 ); After training: ( M = 7.20 ), ( SD = 1.32 ). Mean improvement: ( M_D = 1.53 ), ( SD_D = 2.20 )."_

### Results

#### APA Format

- _"A paired samples t-test showed a significant increase in recall scores after training, ( t(14) = 2.70 ), ( p = .017 ), 95% CI [0.32, 2.75]."_

#### Non-Significant Example

- _"The difference was not significant, ( t(11) = 0.62 ), ( p = .548 ), 95% CI [-4.17, 2.34]."_

### Conclusion

Link results to hypothesis (e.g., _"Training significantly improved recall"_). For non-significant results: _"Insufficient evidence to suggest a difference."_

---

## Examples from Lecture

### Police Memory Training

- **Key Result**: ( t(14) = 2.70 ), ( p = .017 ).
- **Interpretation**: _"Officers remembered 0.32 to 2.75 more plates post-training."_

### Boys’ Self-Estimated vs. Actual Height

- **Non-Significant**: ( t(11) = 0.62 ), ( p = .548 ).
- **Conclusion**: _"No evidence boys misestimate height."_

### Girls’ Self-Estimated vs. Actual Height

- **Significant**: ( t(11) = 6.12 ), ( p < .001 ).
- **Conclusion**: _"Girls underestimated height by 0.63–1.33 cm."_

### Happiness Living Alone vs. Family

- **Large Effect**: ( t(238) = 40.63 ), ( p < .001 ).
- **Interpretation**: _"Happiness 0.57–0.62 units higher with family."_

---

## Key Tips for Reporting

### Check Assumptions

- Use histograms/Q-Q plots or Shapiro-Wilk test for normality of differences.
- Mention robustness for large samples (( n > 30 )).

### Avoid Pitfalls

- Never confuse paired and independent t-tests.
- Always report 95% CI alongside p-values.

### Visual Aids

- Include boxplots or line charts to show paired differences (e.g., pre/post scores).

---

## APA Formatting Guidelines

### t-Test Syntax

- _"A paired samples t-test revealed a significant difference between pre-test (( M = X ), ( SD = Y )) and post-test (( M = X ), ( SD = Y )), ( t(df) = t )-value, ( p = p )-value, 95% CI [LL, UL]."_

### Decimal Precision

- Report p-values to 3 decimals (e.g., ( p = .017 )), unless ( p < .001 ).

---

I hope this helps! Let me know if you need any further assistance.