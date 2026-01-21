def gv

pipeline {
    agent any
    environment {    
        IMAGE_NAME = "${env.BUILD_NUMBER}" 
    }

    stages{
        stage("init") {
            steps {
                script {
                    echo 'initializing the app...'
                }
            }
        }
        stage("build image") {
            steps {
                script {
                    echo 'building the application...'
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh "docker build -t alavenderhat/teamable-app:$IMAGE_NAME ."
                        sh 'echo $PASS | docker login -u $USER --password-stdin'
                        sh "docker push alavenderhat/teamable-app:$IMAGE_NAME"
                                
                    } 
                }
            }
        }
        stage("test") {
            steps {
                script {
                    echo 'testing the app...'
                }
            }
        }
        stage('deploy') {
            steps {
                script {
                    echo 'deploying the app...'
                }
            }
        }
    }
}