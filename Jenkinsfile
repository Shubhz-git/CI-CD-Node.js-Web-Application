pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t newserviceapp.azurecr.io/my-nodejs-app:latest .'
            }
        }
        stage('Push Docker Image') {
            steps {
                sh '''
                echo $ACR_PASSWORD | docker login newserviceapp.azurecr.io -u $ACR_USERNAME --password-stdin
                docker push newserviceapp.azurecr.io/my-nodejs-app:latest
                '''
            }
        }
        stage('Deploy to AKS') {
            steps {
                sh '''
                az aks get-credentials --name new --resource-group new
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }
    }
}
