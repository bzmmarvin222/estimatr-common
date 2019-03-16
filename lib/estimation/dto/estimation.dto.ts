import {SyncableTreeJson} from 'sync_ot';
import {EstimationNode} from '../estimation';

export interface EstimationDto {
    id: string;
    ownerId: string;
    tree: SyncableTreeJson<EstimationNode>;
}