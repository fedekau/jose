module.exports = new Map([
  ['3.1', require('./3_1.ec_public_key')],
  ['3.2', require('./3_2.ec_private_key')],
  ['3.3', require('./3_3.rsa_public_key')],
  ['3.4', require('./3_4.rsa_private_key')],
  ['3.5', require('./3_5.symmetric_key_mac_computation')],
  ['3.6', require('./3_6.symmetric_key_encryption')],
  ['4.1', require('./4_1.rsa_v15_signature')],
  ['4.2', require('./4_2.rsa-pss_signature')],
  ['4.3', require('./4_3.ecdsa_signature')],
  ['4.4', require('./4_4.hmac-sha2_integrity_protection')],
  ['4.6', require('./4_6.protecting_specific_header_fields')],
  ['4.7', require('./4_7.protecting_content_only')],
  ['4.8', require('./4_8.multiple_signatures')],
  ['5.1', require('./5_1.key_encryption_using_rsa_v15_and_aes-hmac-sha2')],
  ['5.2', require('./5_2.key_encryption_using_rsa-oaep_with_aes-gcm')],
  ['5.3', require('./5_3.key_wrap_using_pbes2-aes-keywrap_with-aes-cbc-hmac-sha2')],
  ['5.4', require('./5_4.key_agreement_with_key_wrapping_using_ecdh-es_and_aes-keywrap_with_aes-gcm')],
  ['5.5', require('./5_5.key_agreement_using_ecdh-es_with_aes-cbc-hmac-sha2')],
  ['5.6', require('./5_6.direct_encryption_using_aes-gcm')],
  ['5.7', require('./5_7.key_wrap_using_aes-gcm_keywrap_with_aes-cbc-hmac-sha2')],
  ['5.8', require('./5_8.key_wrap_using_aes-keywrap_with_aes-gcm')],
  ['5.10', require('./5_10.including_additional_authentication_data')],
  ['5.11', require('./5_11.protecting_specific_header_fields')],
  ['5.12', require('./5_12.protecting_content_only')],
  ['5.13', require('./5_13.encrypting_to_multiple_recipients')]
])
