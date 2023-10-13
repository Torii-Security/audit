/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category ModifyAuditorVerifyStatus
 * @category generated
 */
export type ModifyAuditorVerifyStatusInstructionArgs = {
  isVerified: boolean
}
/**
 * @category Instructions
 * @category ModifyAuditorVerifyStatus
 * @category generated
 */
export const modifyAuditorVerifyStatusStruct = new beet.BeetArgsStruct<
  ModifyAuditorVerifyStatusInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['isVerified', beet.bool],
  ],
  'ModifyAuditorVerifyStatusInstructionArgs'
)
/**
 * Accounts required by the _modifyAuditorVerifyStatus_ instruction
 *
 * @property [_writable_] auditorInfo
 * @property [_writable_] auditor
 * @property [] platformConfigInfo
 * @property [_writable_, **signer**] verifier
 * @category Instructions
 * @category ModifyAuditorVerifyStatus
 * @category generated
 */
export type ModifyAuditorVerifyStatusInstructionAccounts = {
  auditorInfo: web3.PublicKey
  auditor: web3.PublicKey
  platformConfigInfo: web3.PublicKey
  verifier: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const modifyAuditorVerifyStatusInstructionDiscriminator = [
  115, 64, 174, 62, 226, 120, 255, 11,
]

/**
 * Creates a _ModifyAuditorVerifyStatus_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ModifyAuditorVerifyStatus
 * @category generated
 */
export function createModifyAuditorVerifyStatusInstruction(
  accounts: ModifyAuditorVerifyStatusInstructionAccounts,
  args: ModifyAuditorVerifyStatusInstructionArgs,
  programId = new web3.PublicKey('Cg96DsFYhhd9drE77seUS3Tqg1t8GvEFwt4mACJ1SMvj')
) {
  const [data] = modifyAuditorVerifyStatusStruct.serialize({
    instructionDiscriminator: modifyAuditorVerifyStatusInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.auditorInfo,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.auditor,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.platformConfigInfo,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.verifier,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
