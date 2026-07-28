pipeline {
    agent any

    stages {

        stage('Checkout Source Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Node Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Execute Playwright Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npm run allure:generate'
            }
        }

        stage('Publish Playwright HTML Report') {
            steps {
                publishHTML(target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report'
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true

            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])

            echo 'Pipeline execution completed.'
        }

        success {
            echo 'SUCCESS: Playwright execution completed successfully.'
        }

        failure {
            echo 'FAILURE: One or more Playwright tests failed.'
        }
    }
}