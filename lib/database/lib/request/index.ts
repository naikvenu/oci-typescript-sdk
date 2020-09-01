/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActivateExadataInfrastructureRequest from "./activate-exadata-infrastructure-request";
export import ActivateExadataInfrastructureRequest = ActivateExadataInfrastructureRequest.ActivateExadataInfrastructureRequest;
import * as AutonomousDatabaseManualRefreshRequest from "./autonomous-database-manual-refresh-request";
export import AutonomousDatabaseManualRefreshRequest = AutonomousDatabaseManualRefreshRequest.AutonomousDatabaseManualRefreshRequest;
import * as ChangeAutonomousContainerDatabaseCompartmentRequest from "./change-autonomous-container-database-compartment-request";
export import ChangeAutonomousContainerDatabaseCompartmentRequest = ChangeAutonomousContainerDatabaseCompartmentRequest.ChangeAutonomousContainerDatabaseCompartmentRequest;
import * as ChangeAutonomousDatabaseCompartmentRequest from "./change-autonomous-database-compartment-request";
export import ChangeAutonomousDatabaseCompartmentRequest = ChangeAutonomousDatabaseCompartmentRequest.ChangeAutonomousDatabaseCompartmentRequest;
import * as ChangeAutonomousExadataInfrastructureCompartmentRequest from "./change-autonomous-exadata-infrastructure-compartment-request";
export import ChangeAutonomousExadataInfrastructureCompartmentRequest = ChangeAutonomousExadataInfrastructureCompartmentRequest.ChangeAutonomousExadataInfrastructureCompartmentRequest;
import * as ChangeAutonomousVmClusterCompartmentRequest from "./change-autonomous-vm-cluster-compartment-request";
export import ChangeAutonomousVmClusterCompartmentRequest = ChangeAutonomousVmClusterCompartmentRequest.ChangeAutonomousVmClusterCompartmentRequest;
import * as ChangeBackupDestinationCompartmentRequest from "./change-backup-destination-compartment-request";
export import ChangeBackupDestinationCompartmentRequest = ChangeBackupDestinationCompartmentRequest.ChangeBackupDestinationCompartmentRequest;
import * as ChangeDbSystemCompartmentRequest from "./change-db-system-compartment-request";
export import ChangeDbSystemCompartmentRequest = ChangeDbSystemCompartmentRequest.ChangeDbSystemCompartmentRequest;
import * as ChangeExadataInfrastructureCompartmentRequest from "./change-exadata-infrastructure-compartment-request";
export import ChangeExadataInfrastructureCompartmentRequest = ChangeExadataInfrastructureCompartmentRequest.ChangeExadataInfrastructureCompartmentRequest;
import * as ChangeVmClusterCompartmentRequest from "./change-vm-cluster-compartment-request";
export import ChangeVmClusterCompartmentRequest = ChangeVmClusterCompartmentRequest.ChangeVmClusterCompartmentRequest;
import * as CompleteExternalBackupJobRequest from "./complete-external-backup-job-request";
export import CompleteExternalBackupJobRequest = CompleteExternalBackupJobRequest.CompleteExternalBackupJobRequest;
import * as CreateAutonomousContainerDatabaseRequest from "./create-autonomous-container-database-request";
export import CreateAutonomousContainerDatabaseRequest = CreateAutonomousContainerDatabaseRequest.CreateAutonomousContainerDatabaseRequest;
import * as CreateAutonomousDataWarehouseRequest from "./create-autonomous-data-warehouse-request";
export import CreateAutonomousDataWarehouseRequest = CreateAutonomousDataWarehouseRequest.CreateAutonomousDataWarehouseRequest;
import * as CreateAutonomousDataWarehouseBackupRequest from "./create-autonomous-data-warehouse-backup-request";
export import CreateAutonomousDataWarehouseBackupRequest = CreateAutonomousDataWarehouseBackupRequest.CreateAutonomousDataWarehouseBackupRequest;
import * as CreateAutonomousDatabaseRequest from "./create-autonomous-database-request";
export import CreateAutonomousDatabaseRequest = CreateAutonomousDatabaseRequest.CreateAutonomousDatabaseRequest;
import * as CreateAutonomousDatabaseBackupRequest from "./create-autonomous-database-backup-request";
export import CreateAutonomousDatabaseBackupRequest = CreateAutonomousDatabaseBackupRequest.CreateAutonomousDatabaseBackupRequest;
import * as CreateAutonomousVmClusterRequest from "./create-autonomous-vm-cluster-request";
export import CreateAutonomousVmClusterRequest = CreateAutonomousVmClusterRequest.CreateAutonomousVmClusterRequest;
import * as CreateBackupRequest from "./create-backup-request";
export import CreateBackupRequest = CreateBackupRequest.CreateBackupRequest;
import * as CreateBackupDestinationRequest from "./create-backup-destination-request";
export import CreateBackupDestinationRequest = CreateBackupDestinationRequest.CreateBackupDestinationRequest;
import * as CreateConsoleConnectionRequest from "./create-console-connection-request";
export import CreateConsoleConnectionRequest = CreateConsoleConnectionRequest.CreateConsoleConnectionRequest;
import * as CreateDataGuardAssociationRequest from "./create-data-guard-association-request";
export import CreateDataGuardAssociationRequest = CreateDataGuardAssociationRequest.CreateDataGuardAssociationRequest;
import * as CreateDatabaseRequest from "./create-database-request";
export import CreateDatabaseRequest = CreateDatabaseRequest.CreateDatabaseRequest;
import * as CreateDbHomeRequest from "./create-db-home-request";
export import CreateDbHomeRequest = CreateDbHomeRequest.CreateDbHomeRequest;
import * as CreateExadataInfrastructureRequest from "./create-exadata-infrastructure-request";
export import CreateExadataInfrastructureRequest = CreateExadataInfrastructureRequest.CreateExadataInfrastructureRequest;
import * as CreateExternalBackupJobRequest from "./create-external-backup-job-request";
export import CreateExternalBackupJobRequest = CreateExternalBackupJobRequest.CreateExternalBackupJobRequest;
import * as CreateVmClusterRequest from "./create-vm-cluster-request";
export import CreateVmClusterRequest = CreateVmClusterRequest.CreateVmClusterRequest;
import * as CreateVmClusterNetworkRequest from "./create-vm-cluster-network-request";
export import CreateVmClusterNetworkRequest = CreateVmClusterNetworkRequest.CreateVmClusterNetworkRequest;
import * as DbNodeActionRequest from "./db-node-action-request";
export import DbNodeActionRequest = DbNodeActionRequest.DbNodeActionRequest;
import * as DeleteAutonomousDataWarehouseRequest from "./delete-autonomous-data-warehouse-request";
export import DeleteAutonomousDataWarehouseRequest = DeleteAutonomousDataWarehouseRequest.DeleteAutonomousDataWarehouseRequest;
import * as DeleteAutonomousDatabaseRequest from "./delete-autonomous-database-request";
export import DeleteAutonomousDatabaseRequest = DeleteAutonomousDatabaseRequest.DeleteAutonomousDatabaseRequest;
import * as DeleteAutonomousVmClusterRequest from "./delete-autonomous-vm-cluster-request";
export import DeleteAutonomousVmClusterRequest = DeleteAutonomousVmClusterRequest.DeleteAutonomousVmClusterRequest;
import * as DeleteBackupRequest from "./delete-backup-request";
export import DeleteBackupRequest = DeleteBackupRequest.DeleteBackupRequest;
import * as DeleteBackupDestinationRequest from "./delete-backup-destination-request";
export import DeleteBackupDestinationRequest = DeleteBackupDestinationRequest.DeleteBackupDestinationRequest;
import * as DeleteConsoleConnectionRequest from "./delete-console-connection-request";
export import DeleteConsoleConnectionRequest = DeleteConsoleConnectionRequest.DeleteConsoleConnectionRequest;
import * as DeleteDatabaseRequest from "./delete-database-request";
export import DeleteDatabaseRequest = DeleteDatabaseRequest.DeleteDatabaseRequest;
import * as DeleteDbHomeRequest from "./delete-db-home-request";
export import DeleteDbHomeRequest = DeleteDbHomeRequest.DeleteDbHomeRequest;
import * as DeleteExadataInfrastructureRequest from "./delete-exadata-infrastructure-request";
export import DeleteExadataInfrastructureRequest = DeleteExadataInfrastructureRequest.DeleteExadataInfrastructureRequest;
import * as DeleteVmClusterRequest from "./delete-vm-cluster-request";
export import DeleteVmClusterRequest = DeleteVmClusterRequest.DeleteVmClusterRequest;
import * as DeleteVmClusterNetworkRequest from "./delete-vm-cluster-network-request";
export import DeleteVmClusterNetworkRequest = DeleteVmClusterNetworkRequest.DeleteVmClusterNetworkRequest;
import * as DeregisterAutonomousDatabaseDataSafeRequest from "./deregister-autonomous-database-data-safe-request";
export import DeregisterAutonomousDatabaseDataSafeRequest = DeregisterAutonomousDatabaseDataSafeRequest.DeregisterAutonomousDatabaseDataSafeRequest;
import * as DownloadExadataInfrastructureConfigFileRequest from "./download-exadata-infrastructure-config-file-request";
export import DownloadExadataInfrastructureConfigFileRequest = DownloadExadataInfrastructureConfigFileRequest.DownloadExadataInfrastructureConfigFileRequest;
import * as DownloadVmClusterNetworkConfigFileRequest from "./download-vm-cluster-network-config-file-request";
export import DownloadVmClusterNetworkConfigFileRequest = DownloadVmClusterNetworkConfigFileRequest.DownloadVmClusterNetworkConfigFileRequest;
import * as FailOverAutonomousDatabaseRequest from "./fail-over-autonomous-database-request";
export import FailOverAutonomousDatabaseRequest = FailOverAutonomousDatabaseRequest.FailOverAutonomousDatabaseRequest;
import * as FailoverDataGuardAssociationRequest from "./failover-data-guard-association-request";
export import FailoverDataGuardAssociationRequest = FailoverDataGuardAssociationRequest.FailoverDataGuardAssociationRequest;
import * as GenerateAutonomousDataWarehouseWalletRequest from "./generate-autonomous-data-warehouse-wallet-request";
export import GenerateAutonomousDataWarehouseWalletRequest = GenerateAutonomousDataWarehouseWalletRequest.GenerateAutonomousDataWarehouseWalletRequest;
import * as GenerateAutonomousDatabaseWalletRequest from "./generate-autonomous-database-wallet-request";
export import GenerateAutonomousDatabaseWalletRequest = GenerateAutonomousDatabaseWalletRequest.GenerateAutonomousDatabaseWalletRequest;
import * as GenerateRecommendedVmClusterNetworkRequest from "./generate-recommended-vm-cluster-network-request";
export import GenerateRecommendedVmClusterNetworkRequest = GenerateRecommendedVmClusterNetworkRequest.GenerateRecommendedVmClusterNetworkRequest;
import * as GetAutonomousContainerDatabaseRequest from "./get-autonomous-container-database-request";
export import GetAutonomousContainerDatabaseRequest = GetAutonomousContainerDatabaseRequest.GetAutonomousContainerDatabaseRequest;
import * as GetAutonomousDataWarehouseRequest from "./get-autonomous-data-warehouse-request";
export import GetAutonomousDataWarehouseRequest = GetAutonomousDataWarehouseRequest.GetAutonomousDataWarehouseRequest;
import * as GetAutonomousDataWarehouseBackupRequest from "./get-autonomous-data-warehouse-backup-request";
export import GetAutonomousDataWarehouseBackupRequest = GetAutonomousDataWarehouseBackupRequest.GetAutonomousDataWarehouseBackupRequest;
import * as GetAutonomousDatabaseRequest from "./get-autonomous-database-request";
export import GetAutonomousDatabaseRequest = GetAutonomousDatabaseRequest.GetAutonomousDatabaseRequest;
import * as GetAutonomousDatabaseBackupRequest from "./get-autonomous-database-backup-request";
export import GetAutonomousDatabaseBackupRequest = GetAutonomousDatabaseBackupRequest.GetAutonomousDatabaseBackupRequest;
import * as GetAutonomousDatabaseRegionalWalletRequest from "./get-autonomous-database-regional-wallet-request";
export import GetAutonomousDatabaseRegionalWalletRequest = GetAutonomousDatabaseRegionalWalletRequest.GetAutonomousDatabaseRegionalWalletRequest;
import * as GetAutonomousDatabaseWalletRequest from "./get-autonomous-database-wallet-request";
export import GetAutonomousDatabaseWalletRequest = GetAutonomousDatabaseWalletRequest.GetAutonomousDatabaseWalletRequest;
import * as GetAutonomousExadataInfrastructureRequest from "./get-autonomous-exadata-infrastructure-request";
export import GetAutonomousExadataInfrastructureRequest = GetAutonomousExadataInfrastructureRequest.GetAutonomousExadataInfrastructureRequest;
import * as GetAutonomousVmClusterRequest from "./get-autonomous-vm-cluster-request";
export import GetAutonomousVmClusterRequest = GetAutonomousVmClusterRequest.GetAutonomousVmClusterRequest;
import * as GetBackupRequest from "./get-backup-request";
export import GetBackupRequest = GetBackupRequest.GetBackupRequest;
import * as GetBackupDestinationRequest from "./get-backup-destination-request";
export import GetBackupDestinationRequest = GetBackupDestinationRequest.GetBackupDestinationRequest;
import * as GetConsoleConnectionRequest from "./get-console-connection-request";
export import GetConsoleConnectionRequest = GetConsoleConnectionRequest.GetConsoleConnectionRequest;
import * as GetDataGuardAssociationRequest from "./get-data-guard-association-request";
export import GetDataGuardAssociationRequest = GetDataGuardAssociationRequest.GetDataGuardAssociationRequest;
import * as GetDatabaseRequest from "./get-database-request";
export import GetDatabaseRequest = GetDatabaseRequest.GetDatabaseRequest;
import * as GetDbHomeRequest from "./get-db-home-request";
export import GetDbHomeRequest = GetDbHomeRequest.GetDbHomeRequest;
import * as GetDbHomePatchRequest from "./get-db-home-patch-request";
export import GetDbHomePatchRequest = GetDbHomePatchRequest.GetDbHomePatchRequest;
import * as GetDbHomePatchHistoryEntryRequest from "./get-db-home-patch-history-entry-request";
export import GetDbHomePatchHistoryEntryRequest = GetDbHomePatchHistoryEntryRequest.GetDbHomePatchHistoryEntryRequest;
import * as GetDbNodeRequest from "./get-db-node-request";
export import GetDbNodeRequest = GetDbNodeRequest.GetDbNodeRequest;
import * as GetDbSystemRequest from "./get-db-system-request";
export import GetDbSystemRequest = GetDbSystemRequest.GetDbSystemRequest;
import * as GetDbSystemPatchRequest from "./get-db-system-patch-request";
export import GetDbSystemPatchRequest = GetDbSystemPatchRequest.GetDbSystemPatchRequest;
import * as GetDbSystemPatchHistoryEntryRequest from "./get-db-system-patch-history-entry-request";
export import GetDbSystemPatchHistoryEntryRequest = GetDbSystemPatchHistoryEntryRequest.GetDbSystemPatchHistoryEntryRequest;
import * as GetExadataInfrastructureRequest from "./get-exadata-infrastructure-request";
export import GetExadataInfrastructureRequest = GetExadataInfrastructureRequest.GetExadataInfrastructureRequest;
import * as GetExadataInfrastructureOcpusRequest from "./get-exadata-infrastructure-ocpus-request";
export import GetExadataInfrastructureOcpusRequest = GetExadataInfrastructureOcpusRequest.GetExadataInfrastructureOcpusRequest;
import * as GetExadataIormConfigRequest from "./get-exadata-iorm-config-request";
export import GetExadataIormConfigRequest = GetExadataIormConfigRequest.GetExadataIormConfigRequest;
import * as GetExternalBackupJobRequest from "./get-external-backup-job-request";
export import GetExternalBackupJobRequest = GetExternalBackupJobRequest.GetExternalBackupJobRequest;
import * as GetMaintenanceRunRequest from "./get-maintenance-run-request";
export import GetMaintenanceRunRequest = GetMaintenanceRunRequest.GetMaintenanceRunRequest;
import * as GetVmClusterRequest from "./get-vm-cluster-request";
export import GetVmClusterRequest = GetVmClusterRequest.GetVmClusterRequest;
import * as GetVmClusterNetworkRequest from "./get-vm-cluster-network-request";
export import GetVmClusterNetworkRequest = GetVmClusterNetworkRequest.GetVmClusterNetworkRequest;
import * as GetVmClusterPatchRequest from "./get-vm-cluster-patch-request";
export import GetVmClusterPatchRequest = GetVmClusterPatchRequest.GetVmClusterPatchRequest;
import * as GetVmClusterPatchHistoryEntryRequest from "./get-vm-cluster-patch-history-entry-request";
export import GetVmClusterPatchHistoryEntryRequest = GetVmClusterPatchHistoryEntryRequest.GetVmClusterPatchHistoryEntryRequest;
import * as LaunchAutonomousExadataInfrastructureRequest from "./launch-autonomous-exadata-infrastructure-request";
export import LaunchAutonomousExadataInfrastructureRequest = LaunchAutonomousExadataInfrastructureRequest.LaunchAutonomousExadataInfrastructureRequest;
import * as LaunchDbSystemRequest from "./launch-db-system-request";
export import LaunchDbSystemRequest = LaunchDbSystemRequest.LaunchDbSystemRequest;
import * as ListAutonomousContainerDatabasesRequest from "./list-autonomous-container-databases-request";
export import ListAutonomousContainerDatabasesRequest = ListAutonomousContainerDatabasesRequest.ListAutonomousContainerDatabasesRequest;
import * as ListAutonomousDataWarehouseBackupsRequest from "./list-autonomous-data-warehouse-backups-request";
export import ListAutonomousDataWarehouseBackupsRequest = ListAutonomousDataWarehouseBackupsRequest.ListAutonomousDataWarehouseBackupsRequest;
import * as ListAutonomousDataWarehousesRequest from "./list-autonomous-data-warehouses-request";
export import ListAutonomousDataWarehousesRequest = ListAutonomousDataWarehousesRequest.ListAutonomousDataWarehousesRequest;
import * as ListAutonomousDatabaseBackupsRequest from "./list-autonomous-database-backups-request";
export import ListAutonomousDatabaseBackupsRequest = ListAutonomousDatabaseBackupsRequest.ListAutonomousDatabaseBackupsRequest;
import * as ListAutonomousDatabaseClonesRequest from "./list-autonomous-database-clones-request";
export import ListAutonomousDatabaseClonesRequest = ListAutonomousDatabaseClonesRequest.ListAutonomousDatabaseClonesRequest;
import * as ListAutonomousDatabasesRequest from "./list-autonomous-databases-request";
export import ListAutonomousDatabasesRequest = ListAutonomousDatabasesRequest.ListAutonomousDatabasesRequest;
import * as ListAutonomousDbPreviewVersionsRequest from "./list-autonomous-db-preview-versions-request";
export import ListAutonomousDbPreviewVersionsRequest = ListAutonomousDbPreviewVersionsRequest.ListAutonomousDbPreviewVersionsRequest;
import * as ListAutonomousDbVersionsRequest from "./list-autonomous-db-versions-request";
export import ListAutonomousDbVersionsRequest = ListAutonomousDbVersionsRequest.ListAutonomousDbVersionsRequest;
import * as ListAutonomousExadataInfrastructureShapesRequest from "./list-autonomous-exadata-infrastructure-shapes-request";
export import ListAutonomousExadataInfrastructureShapesRequest = ListAutonomousExadataInfrastructureShapesRequest.ListAutonomousExadataInfrastructureShapesRequest;
import * as ListAutonomousExadataInfrastructuresRequest from "./list-autonomous-exadata-infrastructures-request";
export import ListAutonomousExadataInfrastructuresRequest = ListAutonomousExadataInfrastructuresRequest.ListAutonomousExadataInfrastructuresRequest;
import * as ListAutonomousVmClustersRequest from "./list-autonomous-vm-clusters-request";
export import ListAutonomousVmClustersRequest = ListAutonomousVmClustersRequest.ListAutonomousVmClustersRequest;
import * as ListBackupDestinationRequest from "./list-backup-destination-request";
export import ListBackupDestinationRequest = ListBackupDestinationRequest.ListBackupDestinationRequest;
import * as ListBackupsRequest from "./list-backups-request";
export import ListBackupsRequest = ListBackupsRequest.ListBackupsRequest;
import * as ListConsoleConnectionsRequest from "./list-console-connections-request";
export import ListConsoleConnectionsRequest = ListConsoleConnectionsRequest.ListConsoleConnectionsRequest;
import * as ListDataGuardAssociationsRequest from "./list-data-guard-associations-request";
export import ListDataGuardAssociationsRequest = ListDataGuardAssociationsRequest.ListDataGuardAssociationsRequest;
import * as ListDatabasesRequest from "./list-databases-request";
export import ListDatabasesRequest = ListDatabasesRequest.ListDatabasesRequest;
import * as ListDbHomePatchHistoryEntriesRequest from "./list-db-home-patch-history-entries-request";
export import ListDbHomePatchHistoryEntriesRequest = ListDbHomePatchHistoryEntriesRequest.ListDbHomePatchHistoryEntriesRequest;
import * as ListDbHomePatchesRequest from "./list-db-home-patches-request";
export import ListDbHomePatchesRequest = ListDbHomePatchesRequest.ListDbHomePatchesRequest;
import * as ListDbHomesRequest from "./list-db-homes-request";
export import ListDbHomesRequest = ListDbHomesRequest.ListDbHomesRequest;
import * as ListDbNodesRequest from "./list-db-nodes-request";
export import ListDbNodesRequest = ListDbNodesRequest.ListDbNodesRequest;
import * as ListDbSystemPatchHistoryEntriesRequest from "./list-db-system-patch-history-entries-request";
export import ListDbSystemPatchHistoryEntriesRequest = ListDbSystemPatchHistoryEntriesRequest.ListDbSystemPatchHistoryEntriesRequest;
import * as ListDbSystemPatchesRequest from "./list-db-system-patches-request";
export import ListDbSystemPatchesRequest = ListDbSystemPatchesRequest.ListDbSystemPatchesRequest;
import * as ListDbSystemShapesRequest from "./list-db-system-shapes-request";
export import ListDbSystemShapesRequest = ListDbSystemShapesRequest.ListDbSystemShapesRequest;
import * as ListDbSystemsRequest from "./list-db-systems-request";
export import ListDbSystemsRequest = ListDbSystemsRequest.ListDbSystemsRequest;
import * as ListDbVersionsRequest from "./list-db-versions-request";
export import ListDbVersionsRequest = ListDbVersionsRequest.ListDbVersionsRequest;
import * as ListExadataInfrastructuresRequest from "./list-exadata-infrastructures-request";
export import ListExadataInfrastructuresRequest = ListExadataInfrastructuresRequest.ListExadataInfrastructuresRequest;
import * as ListGiVersionsRequest from "./list-gi-versions-request";
export import ListGiVersionsRequest = ListGiVersionsRequest.ListGiVersionsRequest;
import * as ListMaintenanceRunsRequest from "./list-maintenance-runs-request";
export import ListMaintenanceRunsRequest = ListMaintenanceRunsRequest.ListMaintenanceRunsRequest;
import * as ListVmClusterNetworksRequest from "./list-vm-cluster-networks-request";
export import ListVmClusterNetworksRequest = ListVmClusterNetworksRequest.ListVmClusterNetworksRequest;
import * as ListVmClusterPatchHistoryEntriesRequest from "./list-vm-cluster-patch-history-entries-request";
export import ListVmClusterPatchHistoryEntriesRequest = ListVmClusterPatchHistoryEntriesRequest.ListVmClusterPatchHistoryEntriesRequest;
import * as ListVmClusterPatchesRequest from "./list-vm-cluster-patches-request";
export import ListVmClusterPatchesRequest = ListVmClusterPatchesRequest.ListVmClusterPatchesRequest;
import * as ListVmClustersRequest from "./list-vm-clusters-request";
export import ListVmClustersRequest = ListVmClustersRequest.ListVmClustersRequest;
import * as RegisterAutonomousDatabaseDataSafeRequest from "./register-autonomous-database-data-safe-request";
export import RegisterAutonomousDatabaseDataSafeRequest = RegisterAutonomousDatabaseDataSafeRequest.RegisterAutonomousDatabaseDataSafeRequest;
import * as ReinstateDataGuardAssociationRequest from "./reinstate-data-guard-association-request";
export import ReinstateDataGuardAssociationRequest = ReinstateDataGuardAssociationRequest.ReinstateDataGuardAssociationRequest;
import * as RestartAutonomousContainerDatabaseRequest from "./restart-autonomous-container-database-request";
export import RestartAutonomousContainerDatabaseRequest = RestartAutonomousContainerDatabaseRequest.RestartAutonomousContainerDatabaseRequest;
import * as RestartAutonomousDatabaseRequest from "./restart-autonomous-database-request";
export import RestartAutonomousDatabaseRequest = RestartAutonomousDatabaseRequest.RestartAutonomousDatabaseRequest;
import * as RestoreAutonomousDataWarehouseRequest from "./restore-autonomous-data-warehouse-request";
export import RestoreAutonomousDataWarehouseRequest = RestoreAutonomousDataWarehouseRequest.RestoreAutonomousDataWarehouseRequest;
import * as RestoreAutonomousDatabaseRequest from "./restore-autonomous-database-request";
export import RestoreAutonomousDatabaseRequest = RestoreAutonomousDatabaseRequest.RestoreAutonomousDatabaseRequest;
import * as RestoreDatabaseRequest from "./restore-database-request";
export import RestoreDatabaseRequest = RestoreDatabaseRequest.RestoreDatabaseRequest;
import * as StartAutonomousDataWarehouseRequest from "./start-autonomous-data-warehouse-request";
export import StartAutonomousDataWarehouseRequest = StartAutonomousDataWarehouseRequest.StartAutonomousDataWarehouseRequest;
import * as StartAutonomousDatabaseRequest from "./start-autonomous-database-request";
export import StartAutonomousDatabaseRequest = StartAutonomousDatabaseRequest.StartAutonomousDatabaseRequest;
import * as StopAutonomousDataWarehouseRequest from "./stop-autonomous-data-warehouse-request";
export import StopAutonomousDataWarehouseRequest = StopAutonomousDataWarehouseRequest.StopAutonomousDataWarehouseRequest;
import * as StopAutonomousDatabaseRequest from "./stop-autonomous-database-request";
export import StopAutonomousDatabaseRequest = StopAutonomousDatabaseRequest.StopAutonomousDatabaseRequest;
import * as SwitchoverAutonomousDatabaseRequest from "./switchover-autonomous-database-request";
export import SwitchoverAutonomousDatabaseRequest = SwitchoverAutonomousDatabaseRequest.SwitchoverAutonomousDatabaseRequest;
import * as SwitchoverDataGuardAssociationRequest from "./switchover-data-guard-association-request";
export import SwitchoverDataGuardAssociationRequest = SwitchoverDataGuardAssociationRequest.SwitchoverDataGuardAssociationRequest;
import * as TerminateAutonomousContainerDatabaseRequest from "./terminate-autonomous-container-database-request";
export import TerminateAutonomousContainerDatabaseRequest = TerminateAutonomousContainerDatabaseRequest.TerminateAutonomousContainerDatabaseRequest;
import * as TerminateAutonomousExadataInfrastructureRequest from "./terminate-autonomous-exadata-infrastructure-request";
export import TerminateAutonomousExadataInfrastructureRequest = TerminateAutonomousExadataInfrastructureRequest.TerminateAutonomousExadataInfrastructureRequest;
import * as TerminateDbSystemRequest from "./terminate-db-system-request";
export import TerminateDbSystemRequest = TerminateDbSystemRequest.TerminateDbSystemRequest;
import * as UpdateAutonomousContainerDatabaseRequest from "./update-autonomous-container-database-request";
export import UpdateAutonomousContainerDatabaseRequest = UpdateAutonomousContainerDatabaseRequest.UpdateAutonomousContainerDatabaseRequest;
import * as UpdateAutonomousDataWarehouseRequest from "./update-autonomous-data-warehouse-request";
export import UpdateAutonomousDataWarehouseRequest = UpdateAutonomousDataWarehouseRequest.UpdateAutonomousDataWarehouseRequest;
import * as UpdateAutonomousDatabaseRequest from "./update-autonomous-database-request";
export import UpdateAutonomousDatabaseRequest = UpdateAutonomousDatabaseRequest.UpdateAutonomousDatabaseRequest;
import * as UpdateAutonomousDatabaseRegionalWalletRequest from "./update-autonomous-database-regional-wallet-request";
export import UpdateAutonomousDatabaseRegionalWalletRequest = UpdateAutonomousDatabaseRegionalWalletRequest.UpdateAutonomousDatabaseRegionalWalletRequest;
import * as UpdateAutonomousDatabaseWalletRequest from "./update-autonomous-database-wallet-request";
export import UpdateAutonomousDatabaseWalletRequest = UpdateAutonomousDatabaseWalletRequest.UpdateAutonomousDatabaseWalletRequest;
import * as UpdateAutonomousExadataInfrastructureRequest from "./update-autonomous-exadata-infrastructure-request";
export import UpdateAutonomousExadataInfrastructureRequest = UpdateAutonomousExadataInfrastructureRequest.UpdateAutonomousExadataInfrastructureRequest;
import * as UpdateAutonomousVmClusterRequest from "./update-autonomous-vm-cluster-request";
export import UpdateAutonomousVmClusterRequest = UpdateAutonomousVmClusterRequest.UpdateAutonomousVmClusterRequest;
import * as UpdateBackupDestinationRequest from "./update-backup-destination-request";
export import UpdateBackupDestinationRequest = UpdateBackupDestinationRequest.UpdateBackupDestinationRequest;
import * as UpdateDatabaseRequest from "./update-database-request";
export import UpdateDatabaseRequest = UpdateDatabaseRequest.UpdateDatabaseRequest;
import * as UpdateDbHomeRequest from "./update-db-home-request";
export import UpdateDbHomeRequest = UpdateDbHomeRequest.UpdateDbHomeRequest;
import * as UpdateDbSystemRequest from "./update-db-system-request";
export import UpdateDbSystemRequest = UpdateDbSystemRequest.UpdateDbSystemRequest;
import * as UpdateExadataInfrastructureRequest from "./update-exadata-infrastructure-request";
export import UpdateExadataInfrastructureRequest = UpdateExadataInfrastructureRequest.UpdateExadataInfrastructureRequest;
import * as UpdateExadataIormConfigRequest from "./update-exadata-iorm-config-request";
export import UpdateExadataIormConfigRequest = UpdateExadataIormConfigRequest.UpdateExadataIormConfigRequest;
import * as UpdateMaintenanceRunRequest from "./update-maintenance-run-request";
export import UpdateMaintenanceRunRequest = UpdateMaintenanceRunRequest.UpdateMaintenanceRunRequest;
import * as UpdateVmClusterRequest from "./update-vm-cluster-request";
export import UpdateVmClusterRequest = UpdateVmClusterRequest.UpdateVmClusterRequest;
import * as UpdateVmClusterNetworkRequest from "./update-vm-cluster-network-request";
export import UpdateVmClusterNetworkRequest = UpdateVmClusterNetworkRequest.UpdateVmClusterNetworkRequest;
import * as ValidateVmClusterNetworkRequest from "./validate-vm-cluster-network-request";
export import ValidateVmClusterNetworkRequest = ValidateVmClusterNetworkRequest.ValidateVmClusterNetworkRequest;
