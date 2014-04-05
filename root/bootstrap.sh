#!/usr/bin/env bash

set -ex

apt-get update -y
apt-get -y install debconf-utils
cat <<EOL | debconf-set-selections
grub-pc grub-pc/install_devices multiselect /dev/vda
grub-pc grub-pc/install_devices_empty boolean false
EOL
apt-get -y upgrade

export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
locale-gen en_US.UTF-8
dpkg-reconfigure locales

