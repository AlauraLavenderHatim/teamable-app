#!/user/bin/env groovy

library identifier: 'jenkins-shared-library@master', retriever: modernSCM(
    [$class: 'GitSCMSource',
    remote: 'https://github.com/AlauraLavenderHatim/jenkins-shared-lib',
    credentialsId: 'gitlab-credentials']
)

def gv

pipeline {
    agent any
    stages{
        stage("init") {
            steps {
                script {
                    
                }
            }
        }
        stage("build image") {
            steps {
                script {
                    buildApp 'alavenderhat/teamable-app:tma-3.0'
                    }
                }
            }
        
        stage("test") {
            steps {
                script {
                    testApp()
                }
            }
        }
        stage('deploy') {
            steps {
                script {
                    deployApp()
                }
            }
        }
    }
}