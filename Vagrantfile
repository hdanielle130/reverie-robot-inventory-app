# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
    config.vm.box = "hashicorp/precise64"
  
    config.vm.provision "shell", inline: <<-SHELL
      apt-get update
      apt-get install -y npm
      npm install -g npm
      npm install -g n
      n 8
      npm install -g npm
      npm install -g nodemon
      npm install -g react
      npm install -g express
      npm install -g mongodb
      npm install -g mongoose
      npm install
      npm run client-install
      npm run dev
    SHELL
  end