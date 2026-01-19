def buildApp() {
    echo 'building the application...'
    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh 'docker build -t alavenderhat/teamable-app:tma-1.0 .'
                        sh 'echo $PASS | docker login -u $USER --password-stdin'
                        sh 'docker push alavenderhat/teamable-app:tma-1.0'
    }                    
}

def testApp() {
    echo 'testing the application...'
}

def deployApp() {
    echo 'deploying the application...'
}

return this