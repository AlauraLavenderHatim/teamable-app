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
                    def dockerCmd = 'docker run -d -p 3000:3000 alavenderhat/teamable-app:13'
                    sshagent(['ec2-user-server']) {
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@16.171.39.58 ${dockerCmd}"
                    }
                }
            }
        }
        //stage('commit version update'){
           // steps {
               // script {
                  //withCredentials([usernamePassword(credentialsId: 'github-credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                   // sh 'git config --global user.email "jenkins@example.com"'
                    //sh 'git config --global user.name "jenkins"'
                    
                    //sh 'git status'
                    //sh 'git branch'
                    //sh 'git config --list'

                    //sh "git remote set-url origin https://${USER}:${PASS}@github.com/AlauraLavenderHatim/teamable-app.git"
                    //sh 'git add .'
                    //sh 'git commit -m "image tag increase"'
                    //sh 'git push HEAD:jenkins-jobs'
                  //} 
               // }
           // }
        //}
    }
}