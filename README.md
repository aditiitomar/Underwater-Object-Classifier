# Underwater Object Classifier

This repository contains a Python implementation of a machine learning model for classifying underwater objects as either rocks or mines based on sonar data.

## Dataset

The dataset used in this project is a CSV file containing sonar readings and corresponding labels (rock or mine): [Dataset](https://www.kaggle.com/datasets/mayurdalvi/sonar-mine-dataset)

## Working

The code will:

1. Import the necessary dependencies.
2. Load and preprocess the sonar dataset.
3. Split the dataset into training and testing sets.
4. Train a logistic regression model on the training data.
5. Evaluate the model's performance on the training and testing data.
6. Allow you to input a new sonar reading and predict whether the object is a rock or a mine.
