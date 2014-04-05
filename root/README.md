# Project Name



## Getting Started

### Set environment variables

Set environment variables at the `~/.bash_profile`.

```
export AWS_ACCESS_KEY="MYAWSACCESSKEY"
export AWS_SECRET_ACCESS_KEY="MYAWSSECRETACCESSKEY"
export AWS_EC2_KEYPAIR="mykeypair"
export AWS_EC2_KEYPAIR_PATH="/path/to/.ssh/id_rsa"
```

### Set up the Vagrant

1. Install [VirtualBox](https://www.virtualbox.org/).
2. Install [Vagrant](http://www.vagrantup.com/).
3. Install the vagrant-aws plugin.
    * `vagrant plugin install vagrant-aws`
4. Clone the repository into a local directory.
    * `git clone https://github.com/xxx`

### Launch with Vagrant

```
vagrant up --provider=aws
```
