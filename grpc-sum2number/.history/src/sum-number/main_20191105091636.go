package main

import (
	"context"
	"database/sql"
	"log"
	"net"
	primary "node-go-grpc/primary"

	_ "github.com/go-sql-driver/mysql"
	"google.golang.org/grpc"
)

type primaryServer struct {
}

func (s *primaryServer) JsonRpc(c context.Context, req *primary.JsonReq) (*primary.JsonResp, error) {

	response := primary.JsonResp{
		ResStatus: 202,
		ResBytes:  req.ReqBytes,
	}
	return &response, nil
}

func (s *primaryServer) ExampleRpc(c context.Context, req *primary.ExampleReq) (*primary.ExampleResp, error) {

	response := primary.ExampleResp{
		RespStr: req.ReqStr,
	}
	return &response, nil
}

func dbConn() (db *sql.DB) {
	dbDriver := "mysql"
	dbUser := "root"
	dbPass := "anhtuan25895"
	dbName := "passcon_db"
	db, err := sql.Open(dbDriver, dbUser+":"+dbPass+"@/"+dbName)
	if err != nil {
		panic(err.Error())
	}
	return db
}

func (s *primaryServer) Add(c context.Context, req *primary.AddRequest) (*primary.AddResponse, error) {
	result := req.Number + req.AnotherNumber
	response := primary.AddResponse{
		Sum: int64(result),
	}
	return &response, nil
}

func newJsonRpcServer() *primaryServer {
	return &primaryServer{}
}

func main() {
	lis, err := net.Listen("tcp", "localhost:10000")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer()
	primary.RegisterPrimaryServer(grpcServer, newJsonRpcServer())
	grpcServer.Serve(lis)
}
