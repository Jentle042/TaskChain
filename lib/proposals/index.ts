/**
 * Proposal Acceptance & Contract Creation — public API.
 *
 *   import {
 *     proposalAcceptanceService,
 *     ProposalAcceptanceError,
 *     proposalErrorToHttpStatus,
 *   } from '@/lib/proposals'
 */

export { proposalAcceptanceService, ProposalAcceptanceService } from './service'
export { proposalAcceptanceRepository, ProposalAcceptanceRepository } from './repository'

export type {
  ProposalStatus,
  JobStatus,
  AcceptedContractStatus,
  EscrowInitStatus,
  ProposalMilestoneBreakdown,
  ProposalRecord,
  JobRecord,
  ContractRecord,
  MilestoneRecord,
  AcceptanceAuditEvent,
  AcceptProposalInput,
  AcceptProposalResult,
  IProposalAcceptanceRepository,
} from './types'

export {
  ProposalAcceptanceError,
  ProposalNotFoundError,
  JobNotFoundError,
  ProposalNotPendingError,
  JobNotAcceptingError,
  ProposalAlreadyAcceptedError,
  ContractAlreadyExistsError,
  ProposalForbiddenError,
  ProposalValidationError,
  ProposalTransactionError,
  proposalErrorToHttpStatus,
} from './errors'
