#!/user/bin/env groovy

def call() {
    echo 'building the application...'
    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
        sh 'docker build -t alavenderhat/teamable-app:tma-1.0 .'
        sh 'echo $PASS | docker login -u $USER --password-stdin'
        sh 'docker push alavenderhat/teamable-app:tma-1.0'
    }
}