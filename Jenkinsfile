pipeline {
    agent any

    stages {
        stage('Baixar fonte') {
            steps { 
                    sh 'ssh ubuntu@172.17.0.1 "rm -rf /home/ubuntu/apps/SolarSystem"'
                    sh 'ssh ubuntu@172.17.0.1 "mkdir -p /home/ubuntu/apps/SolarSystem"'
                    sh 'scp -r /var/jenkins_home/workspace/SolarSystem/. ubuntu@172.17.0.1:/home/ubuntu/apps/SolarSystem'
            } 
        }
        stage('Instalar') {
            steps {
                        sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/SolarSystem;npm install"'
            }
        }
        stage('Construir') {
            steps {
                        sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/SolarSystem;npm run build"'
            }
        }
        stage('Iniciar') { 
            steps {
                    sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/SolarSystem;export JENKINS_NODE_COOKIE=dontKillMe;pm2 stop SolarSystem -s"'
                    sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/SolarSystem;export JENKINS_NODE_COOKIE=dontKillMe;pm2 delete SolarSystem -s"'
                    sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/SolarSystem;pm2 start -n SolarSystem npm -- start;pm2 save --force"' 
            }
        }
    }
}
