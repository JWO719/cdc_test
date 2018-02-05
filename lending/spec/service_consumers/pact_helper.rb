
require 'pact/provider/rspec'
Pact.service_provider "lending" do
  honours_pact_with 'consumer-js' do
    pact_uri './consumer-js-lending.json'
  end
end